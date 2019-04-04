// const createTestCafe = require('testcafe');
const createTestCafe = require('gherkin-testcafe');
let testcafe         = null;

createTestCafe()
    /**
     * For local browser
     */
    // .then(tc => {
    //   testcafe = tc;
    //   const runner = testcafe.createRunner();

    //   return runner
    //     .src(['tests/step_definitions/**/*.js', 'tests/features/**/*.feature'])
    //     .browsers(['chrome'])
    //     .concurrency(2)
    //     .run();
    // })

    /**
     * For remote browser
     */
    .then(tc => {
      testcafe = tc;
      runner   = testcafe.createRunner();

      return testcafe.createBrowserConnection();
      })
      .then(remoteConnection => {
          // Outputs remoteConnection.url so that it can be visited from the remote browser.
          console.log(remoteConnection.url);
          remoteConnection.once('ready', () => {
            runner
              .src(['tests/step_definitions/**/*.js', 'tests/features/**/*.feature'])
              .browsers(remoteConnection)
              .run()
              .then(failedCount => {
                console.log(failedCount);
                testcafe.close();
              });
          });
      })
    // .then(failedCount => {
    //   console.log('Tests failed: ' + failedCount);
    //   testcafe.close();
    // })
    .catch(error => {
      console.log(error)
    })