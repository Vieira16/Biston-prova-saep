const { Builder, By, Key, until } = require('selenium-webdriver');

async function abrirYoutube() {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {

    // abrir youtube
    await driver.get('https://www.youtube.com');

    // esperar caixa de busca aparecer
    let busca = await driver.wait(
      until.elementLocated(By.name('search_query')),
      10000
    );

    // digitar pesquisa
    await busca.sendKeys('lofi music', Key.RETURN);

    // esperar resultados carregarem
    await driver.wait(
      until.elementLocated(By.id('video-title')),
      10000
    );

    // pegar primeiro vídeo
    let primeiroVideo = await driver.findElement(By.id('video-title'));

    // clicar
    await primeiroVideo.click();

    // esperar 10 segundos rodando
    await driver.sleep(10000);

  } finally {
    await driver.quit();
  }
}

abrirYoutube();
