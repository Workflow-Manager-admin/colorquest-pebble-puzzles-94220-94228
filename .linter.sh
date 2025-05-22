#!/bin/bash
cd /home/kavia/workspace/code-generation/colorquest-pebble-puzzles-94220-94228/main_container_for_colorquest_pebble_puzzles
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

