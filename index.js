const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
function toNumber(numStr){
  const num = Number(numStr)
  if(isNaN(num)){
    throw Error('Value should be a number')
  }
  return num
}
function temperatureAlert(freezingThreshold,boilingThreshold,fluctuation,temperature){
  console.log('input:',temperature.join(' '))
  const output = []
  let status = 'water'
  for (var i = 0; i < temperature.length; i++) {
    const t = temperature[i]
    output.push(t)
    if(t<=freezingThreshold){
      if(i===0){
        status = 'ice'
        output.push('freezing')
      }else{
        const prevT = temperature[i-1]
        if(prevT > freezingThreshold && status !== 'ice'){
          status = 'ice'
          output.push('freezing')
        }
      }
    }
    if(t>freezingThreshold + fluctuation){
      if(status === 'ice'){
        status = 'water'
        output.push('unfreezing')
      }
    }
    if(t<boilingThreshold-fluctuation){
      if(status === 'steam'){
        status = 'water'
        output.push('unboiling')
      }
    }
    if(t>=boilingThreshold){
      if(i===0){
        status = 'steam'
        output.push('boiling')
      }else{
        const prevT = temperature[i-1]
        if(prevT < boilingThreshold && status !== 'steam'){
          status = 'steam'
          output.push('boiling')
        }
      }
    }
  }
  console.log('output:',output.join(' '))
}
readline.question('Please input freezing threshold\n', freezingThreshold => {
  readline.question('Please input boiling threshold\n', boilingThreshold => {
    readline.question('Please input fluctuation value\n', fluctuation => {
      readline.close();
      const freezingThresholdNum = toNumber(freezingThreshold)
      const boilingThresholdNum = toNumber(boilingThreshold)
      const fluctuationValue = toNumber(fluctuation)
      temperatureAlert(freezingThresholdNum,boilingThreshold,fluctuation,[4.0,1.0,0.5,0.0,-0.5,0.0,0.5,0.0,-2.0,0.0,0.5,0.6,2.0])
      temperatureAlert(freezingThresholdNum,boilingThreshold,fluctuation,[5.0,-0.5,0.5,-0.2,100,101])
      temperatureAlert(freezingThresholdNum,boilingThreshold,fluctuation,[0.0,0.3,0.5,0.4,0.7])
    });
  });
});
