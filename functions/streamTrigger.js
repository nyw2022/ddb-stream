exports.handler = async (event, context) => {
  try {
    event.Records.map((record) => {
      console.log(record);
    });
    return;
  } catch (error) {}
  return;
};
