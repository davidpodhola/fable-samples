call npm install

set fable=../../../../others/Fabel

..\..\tools\fnr\fnr.exe --cl --find "!!FABEL!!" --replace "%fable%" --dir "%cd%" --fileMask "fableconfig.json" --includeSubDirectories

node %fable%/tools/fable2babel.js --projFile ../src/solution.fsx



