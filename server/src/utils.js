

const inmutablePush =  value => array => {
  const clone = [...array];

  clone.push(value)
  return clone
}

module.exports = inmutablePush;