"""Create two original, short quiz cues (mono 16-bit PCM, no external assets)."""
import math
from pathlib import Path
import struct
import wave

RATE = 44100
DEST = Path(__file__).resolve().parents[1] / 'public' / 'media' / 'audio'
DEST.mkdir(parents=True, exist_ok=True)


def write_cue(name, notes, duration):
    samples = [0.0] * round(duration * RATE)
    for start, length, frequency, end_frequency, voice in notes:
        phase = 0
        for frame in range(round(length * RATE)):
            elapsed = frame / RATE
            progress = elapsed / length
            pitch = frequency + (end_frequency - frequency) * progress ** 1.8
            # Wide vibrato and a late pitch slide give the trombone its comic droop.
            vibrato = .018 if voice == 'trombone' else .004
            pitch *= 1 + vibrato * math.sin(2 * math.pi * 5.5 * elapsed) * min(1, elapsed * 8)
            phase += 2 * math.pi * pitch / RATE
            envelope = min(1, elapsed / .018) * min(1, (length - elapsed) / .08)
            if voice == 'whistle':
                tone = math.sin(phase) + .08 * math.sin(2 * phase)
            else:
                brightness = 1 - .5 * progress
                tone = sum((brightness ** (harmonic - 1)) * math.sin(harmonic * phase) / harmonic
                           for harmonic in range(1, 9))
                tone /= 1.7
            index = round(start * RATE) + frame
            if index < len(samples):
                samples[index] += .3 * envelope * tone
    peak = max(abs(value) for value in samples)
    gain = .72 / max(peak, .01)
    pcm = b''.join(struct.pack('<h', round(value * gain * 32767)) for value in samples)
    with wave.open(str(DEST / name), 'wb') as output:
        output.setparams((1, 2, RATE, 0, 'NONE', 'not compressed'))
        output.writeframes(pcm)


# Original cartoon fanfare: two brass stabs, a major chord and a rising slide whistle.
write_cue('quiz-correct.wav', [
    (0, .14, 392, 392, 'brass'), (.17, .14, 392, 392, 'brass'),
    (.35, .58, 523.25, 523.25, 'brass'), (.35, .58, 659.25, 659.25, 'brass'),
    (.35, .58, 783.99, 783.99, 'brass'), (.87, .38, 850, 1850, 'whistle'),
], 1.35)

# Original sad-trombone "wah-wah": three descending stabs and an exaggerated final slide.
write_cue('quiz-incorrect.wav', [
    (0, .24, 293.66, 277.18, 'trombone'), (.28, .24, 261.63, 246.94, 'trombone'),
    (.56, .24, 233.08, 220, 'trombone'), (.86, .92, 207.65, 103.83, 'trombone'),
], 1.88)
