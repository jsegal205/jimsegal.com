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

if pgrep -f "Python -m http.server"; then
  echo "=== Found running local python server, stopping that instance ==="
  pkill -f "Python -m http.server"
fi

open http://localhost:8000/

echo "=== Starting local server ==="
python3 -m http.server
