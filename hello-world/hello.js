// Lambda function code

module.exports.handler = async (event) => {
  console.log('Event: ', event);
  
  var day = new Date().getDay()
  var isItFriday = (day === 5)  ? 'Ja det Fredag!!!!': 'Ikke Fredag!';

  if (event.queryStringParameters && event.queryStringParameters['snyd']) {
    isItFriday = "Fredag!"
  }
  
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
