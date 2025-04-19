#!/usr/bin/env python3
import sys, pathlib, yaml, re

REQUIRED = [
    "memory-bank/projectbrief.md",
    "memory-bank/productContext.md",
    "memory-bank/systemPatterns.md",
    "memory-bank/techContext.md",
    "memory-bank/activeContext.md",
    "memory-bank/progress.md",
]

def main():
    missing = [f for f in REQUIRED if not pathlib.Path(f).is_file()]
    if missing:
        print("Arquivos de memória ausentes:", *missing, sep="\n  ")
        sys.exit(1)
    print("✅ Memory‑Bank OK")

if __name__ == "__main__":
    main()
