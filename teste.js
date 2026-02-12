const { Builder, By, Key, until } = require('selenium-webdriver');

async function iniciar() {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {

    // abre site
    await driver.get('https://example.com');

    // espera carregar
    await driver.sleep(3000);

  } finally {
    await driver.quit();
  }
}

iniciar();
