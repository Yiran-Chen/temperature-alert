# Start
node index.js
# Output
Please input freezing threshold
0
Please input boiling threshold
100
Please input fluctuation value
0.5
input: 4 1 0.5 0 -0.5 0 0.5 0 -2 0 0.5 0.6 2
output: 4 1 0.5 0 freezing -0.5 0 0.5 0 -2 0 0.5 0.6 unfreezing 2
input: 5 -0.5 0.5 -0.2 100 101
output: 5 -0.5 freezing 0.5 -0.2 100 unfreezing boiling 101
input: 0 0.3 0.5 0.4 0.7
output: 0 freezing 0.3 0.5 0.4 0.7 unfreezing
