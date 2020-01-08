#!/bin/bash

if test ! $(which python); then
  if test ! $(which brew); then
    echo "=== Installing homebrew ==="
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  fi

  echo "=== Installing python ==="
  brew install python
  echo
fi

echo "=== Starting local server ==="
python3 -m http.server
