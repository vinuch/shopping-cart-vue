
const cartRoutes = (app, fs) => {

  // variables
  const dataPath = './data/cart.json';

  // helper methods
  const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
      fs.readFile(filePath, encoding, (err, data) => {
          if (err) {
              throw err;
          }

          callback(returnJson ? JSON.parse(data) : data);
      });
  };

  const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

      fs.writeFile(filePath, fileData, encoding, (err) => {
          if (err) {
              throw err;
          }

          callback();
      });
  };

  // READ
  app.get('/cart', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
          if (err) {
              throw err;
          }

          res.send(JSON.parse(data));
      });
  });

  // CREATE
  app.post('/cart', (req, res) => {

      readFile(data => {
          const newUserId = Object.keys(data).length ;
            req.body.id = newUserId
          // add the new user
          data[newUserId] = req.body;

          writeFile(JSON.stringify(data), () => {
              res.status(200).send(data);
          });
      },
          true);
  });


  // UPDATE
  app.put('/cart/:id', (req, res) => {

      readFile(data => {

          // add the new user
          const userId = req.params["id"];
          data[userId] = req.body;

          writeFile(JSON.stringify(data, null, 2), () => {
              res.status(200).send(data);
          });
      },
          true);
  });


  // DELETE
  app.delete('/cart/:id', (req, res) => {

      readFile(data => {

          // add the new user
          let userId = req.params.id;
          let modifiedData = data.filter((item) => {
              if(item.id != userId) {
                  return true
              }
              return false
          } )
        //   delete data[userId];

          writeFile(JSON.stringify(modifiedData, null, 2), () => {
              res.status(200).send(modifiedData);
          });
      },
          true);
  });

};

module.exports = cartRoutes;