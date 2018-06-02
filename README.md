# Parcel bug repro

This repo is here to reproduce some parcel bug I found.

To observe the problem, you can do the following:

```
echo a > template5.html
parcel build index.html -d dist-a
echo b > template5.html
parcel build index.thml -d dist-b
diff dist-a/parcel-import-bug.*.js dist-b/parcel-import-bug.*.js
```

Notice that the filenames of the generated JavaScript files are the same but their contents differ slightly.
