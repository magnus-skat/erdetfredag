// Lambda function code

module.exports.handler = async (event) => {
  console.log('Event: ', event);
  
  var day = new Date().getDay()
  var isItFriday = (day === 5)  ? 'Fredag!': 'Ikke Fredag!';

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: isItFriday,
    }),
  }
}
