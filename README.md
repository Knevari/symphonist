# Symphonist

Symphonist is a library that allows you to better study music or jam along with your friends. It's simple API exposes extremely modular music theory constructs from the ground up and is able to generate chord progressions for you to play with.

### Generating a chord progression

```
import symphonist from "symphonist"

const options = {
  length: 4,
  root: "C",
  key: "major"
}

const progression = symphonist.generateProgression(options);
// Dm7 -> Am7 -> G5 -> FM7
```

### Getting built-in scales

Symphonist includes a collection of scales for every single note, those being
major, minor, hexaphonic and diminished scales.

```
import { scales } from "symphonist"
```

You can also import chords, notes and keys using the same approach
