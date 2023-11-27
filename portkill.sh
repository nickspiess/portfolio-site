#!/bin/bash

# Script to forcefully kill processes listening on ports 3000-3010

for port in {3000..3010}; do
    # Find PIDs listening on the port and kill them
    for pid in $(lsof -ti tcp:${port}); do
        if [ ! -z "$pid" ]; then
            echo "Forcefully killing process on port $port with PID $pid"
            kill -9 $pid
        else
            echo "No process found on port $port"
        fi
    done
done

echo "All relevant processes have been terminated."
