// Add more boards here in the same shape: name -> { cover, pins }
const boards = {
  "me": {
    cover: [
      "https://i.pinimg.com/1200x/c7/e6/70/c7e670b85d515196a8805ae51ff8ed93.jpg",
      "https://i.pinimg.com/736x/64/60/ec/6460ec1bbaccae2895e919a1c0361c6d.jpg",
      "https://i.pinimg.com/1200x/c1/cd/69/c1cd6960dc99221c8cf54e1983b0c096.jpg",
      "https://i.pinimg.com/736x/c3/96/59/c39659ba280c92381351111419c6c916.jpg"
    ],
    pins: [
      "https://i.pinimg.com/1200x/a7/af/1f/a7af1fd8c5f21f1fc5873ab49f95190e.jpg",
      "https://i.pinimg.com/1200x/ab/ca/0e/abca0ee632ebd78d7f7c9aa1503c7992.jpg",
      "https://i.pinimg.com/1200x/03/ff/6b/03ff6b5b75ca6f7a50d897a5a31db2a2.jpg",
      "https://i.pinimg.com/736x/ae/06/8b/ae068bee18ab10bf108121663ae4cbc6.jpg",
      "https://i.pinimg.com/736x/2d/9f/bc/2d9fbc6365f1c95946fa5220564be490.jpg",
      "https://i.pinimg.com/736x/88/17/72/881772a5f1adbc92ec251a0195c07a24.jpg",
      "https://i.pinimg.com/736x/aa/b0/52/aab05250633ff2be5183d757b75d5904.jpg",
      "https://i.pinimg.com/736x/f4/0f/e9/f40fe9aaab60db47339d63be95bcd136.jpg",
      "https://i.pinimg.com/736x/d6/3d/6e/d63d6edd9af87e20cfef608076cad1a8.jpg",
      "https://i.pinimg.com/1200x/54/a0/6a/54a06a0d535cd7f2f556ded3fa031f11.jpg",
      "https://i.pinimg.com/1200x/84/1e/e3/841ee310074d772ca3e3f9f1e4b6d464.jpg",
      "https://i.pinimg.com/736x/cd/9a/03/cd9a033bb8ff0b5b1bc5fe15e84a2ae3.jpg",
      "https://i.pinimg.com/736x/9c/0d/24/9c0d2474696aa95249c9f9a3367fc597.jpg",
      "https://i.pinimg.com/736x/03/ee/cf/03eecfdcfc564da82dca4813cddfcbf2.jpg",
      "https://i.pinimg.com/1200x/cf/f9/7d/cff97d9e9c613cc9eead7e05625ff508.jpg",
      "https://i.pinimg.com/736x/68/a3/9b/68a39b197df858783cb3ef9c675d5476.jpg",
      "https://i.pinimg.com/736x/6b/ca/0e/6bca0e3bceea3900db31f4d35fa0921d.jpg",
      "https://i.pinimg.com/736x/a2/38/3d/a2383d9b2a33047c60e70ac2af17b659.jpg",
      "https://i.pinimg.com/736x/94/28/dd/9428dd5fb7f3c1249f0e4bfae8346c70.jpg",
      "https://i.pinimg.com/1200x/25/59/e3/2559e315b5c624788c61f36c2a42ed48.jpg",
      "https://i.pinimg.com/736x/9d/30/72/9d3072c6758d05b41b8ce827dd3c5f2a.jpg",
      "https://i.pinimg.com/736x/de/5b/39/de5b397aa95201ce41e82acf82380711.jpg",
      "https://i.pinimg.com/736x/c7/55/ff/c755ff4df4665287cbb242bcaec71daa.jpg",
      "https://i.pinimg.com/736x/64/60/ec/6460ec1bbaccae2895e919a1c0361c6d.jpg",
      "https://i.pinimg.com/1200x/a9/af/9f/a9af9f4f0455e31374af28f9785815d1.jpg",
      "https://i.pinimg.com/736x/81/29/e2/8129e2cbe075162657e50006f56e89fc.jpg",
      "https://i.pinimg.com/736x/7a/96/89/7a9689f324b9781a61770bd9b3695c2c.jpg",
      "https://i.pinimg.com/736x/11/b1/37/11b137170faa9233f9f09a6da21224c7.jpg",
      "https://i.pinimg.com/736x/d5/c4/9e/d5c49eec84182ffcccfbb80fb453e90f.jpg",
      "https://i.pinimg.com/736x/a2/05/ce/a205cef99120a8316c4bd76864d58dcf.jpg",
      "https://i.pinimg.com/736x/ca/a8/34/caa83476810a6398fd63dcc576ef122e.jpg",
      "https://i.pinimg.com/736x/14/a8/0d/14a80dad8e3de755bc3cf1fb0a3e3031.jpg",
      "https://i.pinimg.com/736x/84/a7/81/84a78143d29492bc56752742b2ff75e4.jpg",
      "https://i.pinimg.com/474x/f7/32/37/f73237fac191230afe0c351e72fa4315.jpg",
      "https://i.pinimg.com/1200x/55/ff/2b/55ff2b8a68f1f3ead3222e4372e617c2.jpg",
      "https://i.pinimg.com/736x/93/8b/72/938b722283847e5dec313b116b84a2fe.jpg",
      "https://i.pinimg.com/736x/5a/ac/0a/5aac0aa20092d74509d4de421653b9d0.jpg",
      "https://i.pinimg.com/736x/41/81/a6/4181a6c57bbe32284e76df48fad82a1f.jpg",
      "https://i.pinimg.com/1200x/93/89/40/9389402352577175fca6b0b735aa6535.jpg",
      "https://i.pinimg.com/736x/48/40/72/484072246d2bb31c5c885b1118003da7.jpg",
      "https://i.pinimg.com/736x/64/e6/20/64e6205248611c87c20b78cd63d7fb51.jpg",
      "https://i.pinimg.com/1200x/ad/2d/49/ad2d492552837c70fed7920a5bfb36e3.jpg",
      "https://i.pinimg.com/736x/e9/e0/d5/e9e0d5426ad8ce2f7051be8a26bfeaad.jpg",
      "https://i.pinimg.com/736x/5c/e4/db/5ce4db9b6ca2c6f71379b04206392992.jpg",
      "https://i.pinimg.com/736x/c3/96/59/c39659ba280c92381351111419c6c916.jpg",
      "https://i.pinimg.com/1200x/c1/cd/69/c1cd6960dc99221c8cf54e1983b0c096.jpg",
      "https://i.pinimg.com/236x/13/6e/60/136e6077ef2715f75014ad0ca9a6cdd0.jpg",
      "https://i.pinimg.com/736x/bc/2c/2c/bc2c2c42ef8e5f74b0f8bd7499076d38.jpg",
      "https://i.pinimg.com/1200x/53/7c/e4/537ce43a81a74f28a75a20c1597c21a9.jpg",
      "https://i.pinimg.com/1200x/1a/9b/b0/1a9bb0445dad811f358489e68ac48d85.jpg",
      "https://i.pinimg.com/1200x/fa/c4/5d/fac45dc80f7ab1e065d5b1851ec7358f.jpg",
      "https://i.pinimg.com/1200x/36/5f/6a/365f6a8393e701c24b6d297bc37325fb.jpg",
      "https://i.pinimg.com/736x/26/11/46/261146f894517271c479e92a3f57c478.jpg",
      "https://i.pinimg.com/736x/f0/33/9d/f0339dbf2eb479c0bc50b9019a9cf001.jpg",
      "https://i.pinimg.com/736x/1a/36/72/1a36723418fcb40d08f43667574c6404.jpg",
      "https://i.pinimg.com/736x/4d/00/d1/4d00d1076c0c3cfd700b87caa390427f.jpg",
      "https://i.pinimg.com/736x/e2/3b/32/e23b3269205a3a1a77437bc6befd3765.jpg",
      "https://i.pinimg.com/736x/3c/42/bd/3c42bdd0c893861cb75449f555310ea3.jpg",
      "https://i.pinimg.com/736x/43/6b/b4/436bb40f6df731d574bcccaae1e44b79.jpg",
      "https://i.pinimg.com/736x/9e/c5/25/9ec52543891a70c1c87290930d00d216.jpg",
      "https://i.pinimg.com/736x/37/64/58/3764581fac32963607268e6cdf3cef78.jpg",
      "https://i.pinimg.com/736x/54/cb/1e/54cb1ebcea07f8604563c910dcf0ba10.jpg",
      "https://i.pinimg.com/736x/5b/ee/a2/5beea251dcddf6a4f7fda02721a36645.jpg",
      "https://i.pinimg.com/1200x/f3/87/99/f38799e9dadbb5b602f65ac33b80db7a.jpg",
      "https://i.pinimg.com/736x/a8/fe/63/a8fe639ea82484d4a164516d0716f4ba.jpg",
      "https://i.pinimg.com/736x/b5/7f/d7/b57fd73708dfce3c067e8a1688979dd8.jpg",
      "https://i.pinimg.com/736x/3b/6a/f2/3b6af26ba1f1bfce8909d26b8c4d5a16.jpg",
      "https://i.pinimg.com/736x/78/44/c6/7844c6e580c7b01dda1b91eea9bc2125.jpg",
      "https://i.pinimg.com/736x/e5/33/df/e533dfa98f73f89e46f6cdc9de708d40.jpg",
      "https://i.pinimg.com/736x/9f/e0/55/9fe055abb036a4e14cc7daa4d59ae1a9.jpg",
      "https://i.pinimg.com/1200x/5e/93/99/5e939928630a4002409450dc758e46b8.jpg",
      "https://i.pinimg.com/736x/04/19/55/041955425669ce38008a348a5b419133.jpg",
      "https://i.pinimg.com/736x/b7/a0/e0/b7a0e06a2beadab18a37293e74994c34.jpg",
      "https://i.pinimg.com/736x/1d/60/ba/1d60ba9d395aae0a04ef2913c4fbbc4d.jpg",
      "https://i.pinimg.com/1200x/bd/63/e0/bd63e064776cc13457f8f3a9c5db0cc2.jpg",
      "https://i.pinimg.com/736x/a4/3c/57/a43c577ebe2927cbf66d2477d35ff380.jpg",
      "https://i.pinimg.com/736x/d7/81/9d/d7819d5b82c9e74b402e54af5362ccfa.jpg",
      "https://i.pinimg.com/1200x/69/eb/b4/69ebb47d7242afca9e1a07c53aca8588.jpg",
      "https://i.pinimg.com/736x/db/c4/91/dbc4919be45f69d72c3a14c258f4da90.jpg",
      "https://i.pinimg.com/1200x/ab/a8/7c/aba87c63c85fcba369976dabffd3386b.jpg",
      "https://i.pinimg.com/736x/d4/67/71/d46771b22498cb1f4f5662c4fca4a24f.jpg",
      "https://i.pinimg.com/736x/8a/23/3a/8a233ad0ce4df20ff6789b74896c6bbc.jpg",
      "https://i.pinimg.com/736x/34/69/50/34695071f5249e7d93a63d422fd7c7ed.jpg",
      "https://i.pinimg.com/1200x/dd/33/34/dd3334342962e92b41629e67025ea4eb.jpg",
      "https://i.pinimg.com/736x/a5/eb/b1/a5ebb1665594c3e1825bc591de67616c.jpg",
      "https://i.pinimg.com/736x/ca/0b/37/ca0b376b771d71c78b0ef66e3793815b.jpg",
      "https://i.pinimg.com/736x/03/57/c5/0357c5b2811d9b69bafac608a2aae2d5.jpg",
      "https://i.pinimg.com/1200x/d9/1a/5c/d91a5ca0ed4f9a1820895834932db6e0.jpg",
      "https://i.pinimg.com/736x/f5/cd/da/f5cdda1e5a7da3b51dfec3511165ecac.jpg",
      "https://i.pinimg.com/1200x/2e/c9/c5/2ec9c5898b7b43e61a3251d2100dffec.jpg",
      "https://i.pinimg.com/736x/ac/46/84/ac4684f78d70f0cfb7c7053d08c4bbac.jpg",
      "https://i.pinimg.com/736x/e0/23/8c/e0238c64f92a11fd990c7bc7f5ecd9f8.jpg",
      "https://i.pinimg.com/736x/ed/50/f9/ed50f96ad000b4e2a498e1b5bb61a39d.jpg",
      "https://i.pinimg.com/736x/d5/65/5f/d5655f193924a81bf09e4543618e7179.jpg",
      "https://i.pinimg.com/736x/ab/94/b6/ab94b65087e3bfa6126b5e2ff47055c0.jpg",
      "https://i.pinimg.com/1200x/9a/95/7a/9a957ac6d8a7c3f882131b8420286b93.jpg",
      "https://i.pinimg.com/736x/13/0a/ab/130aab10bb62e5ff058aa56d4e5c3482.jpg",
      "https://i.pinimg.com/736x/d6/e0/63/d6e063cdc957c607c63c3dab88b85e8a.jpg",
      "https://i.pinimg.com/736x/0e/40/19/0e4019a0f980ebbef65306c6365949b7.jpg",
      "https://i.pinimg.com/1200x/4e/67/87/4e6787d6695d852c0ad16ac6f7d89af2.jpg",
      "https://i.pinimg.com/736x/eb/dc/93/ebdc9306b944ab9463f6f0259f553a14.jpg",
      "https://i.pinimg.com/1200x/4c/9b/53/4c9b5323b76382be9caf6a6c7932cab3.jpg",
      "https://i.pinimg.com/736x/e7/95/19/e79519b0db121827a3bdc73c1439f82d.jpg",
      "https://i.pinimg.com/1200x/5a/66/5e/5a665e4379f97e19d0981c6ecae529db.jpg",
      "https://i.pinimg.com/736x/01/db/a0/01dba0e96782a00a5a0ea92affb52417.jpg",
      "https://i.pinimg.com/736x/44/ba/8a/44ba8ab9ff7dea015938690a4367bab4.jpg",
      "https://i.pinimg.com/1200x/c7/e6/70/c7e670b85d515196a8805ae51ff8ed93.jpg",
      "https://i.pinimg.com/736x/61/61/14/61611481e1dc9c7c6346c26e0f6cacde.jpg",
      "https://i.pinimg.com/736x/9f/3c/95/9f3c958b3382b94b5ba6adbb795262e9.jpg",
      "https://i.pinimg.com/1200x/51/75/7c/51757c4a6a7430598ae6228de30bf690.jpg",
      "https://i.pinimg.com/736x/9a/fa/8f/9afa8f40e9ee2d8396b5c77b88514214.jpg",
      "https://i.pinimg.com/1200x/26/c0/5d/26c05d9d34bfcf2acc753abdaa740928.jpg",
      "https://i.pinimg.com/736x/d6/8d/15/d68d1522272a649bd6edfd44b8db06c5.jpg",
      "https://i.pinimg.com/736x/8c/1d/d5/8c1dd59cd7d7856fb05fd120a38c6934.jpg",
      "https://i.pinimg.com/736x/18/7c/20/187c20c0ccd73307f6897ec675fd70c4.jpg",
      "https://i.pinimg.com/736x/2c/75/2c/2c752c95a08537e6764c23e77f5b3a74.jpg",
      "https://i.pinimg.com/736x/50/ba/1b/50ba1bb8786e56ecb027ef8ba7996413.jpg",
      "https://i.pinimg.com/736x/45/9e/a7/459ea75847f351d5b92b644223b8ee13.jpg",
      "https://i.pinimg.com/736x/f9/76/ef/f976ef672b803ff22db8ed9f6e868529.jpg",
      "https://i.pinimg.com/736x/e4/60/43/e46043a271f7ea7753419f1e490b8c0f.jpg",
      "https://i.pinimg.com/736x/bc/e3/90/bce390418f5aa527a13fa0fa403a909f.jpg",
      "https://i.pinimg.com/736x/be/9d/eb/be9deb9af66265dde28e254d6acee065.jpg",
      "https://i.pinimg.com/736x/90/07/70/900770b89b5c577e7316c2cf5a741a73.jpg",
      "https://i.pinimg.com/1200x/da/b5/8c/dab58cf8af9a7f6f8ba95a00b5084905.jpg",
      "https://i.pinimg.com/736x/b1/5d/46/b15d46b6f7d43044675938c271e44678.jpg",
      "https://i.pinimg.com/736x/35/e5/04/35e504ceba8b3df17527099fd5ff9d5d.jpg",
      "https://i.pinimg.com/736x/b3/13/bf/b313bf07a6fd99112e43ce54c58e103e.jpg",
      "https://i.pinimg.com/736x/5e/db/66/5edb663f3f0a0b619a19130223e84367.jpg",
      "https://i.pinimg.com/736x/b0/b1/fb/b0b1fba5783066d2595acb459ccdaacb.jpg"
    ]
  }
};

const boardGrid = document.getElementById('boardGrid');
const boardsView = document.getElementById('boardsView');
const boardDetailView = document.getElementById('boardDetailView');
const boardDetailGrid = document.getElementById('boardDetailGrid');
const boardDetailTitle = document.getElementById('boardDetailTitle');
const backToBoards = document.getElementById('backToBoards');

function coverHTML(cover) {
  if (Array.isArray(cover)) {
    const main = cover[0];
    const stack = cover
      .slice(1)
      .map(function (url) { return '<img src="' + url + '"/>'; })
      .join('');
    return '<div class="board-cover">' +
             '<div class="cover-main"><img src="' + main + '"/></div>' +
             '<div class="cover-stack">' + stack + '</div>' +
           '</div>';
  }
  return '<div class="board-cover"><div class="cover-main"><img src="' + cover + '"/></div></div>';
}

function renderBoardTiles() {
  boardGrid.innerHTML = '';
  Object.keys(boards).forEach(function (name) {
    const board = boards[name];
    const tile = document.createElement('div');
    tile.className = 'board-tile';
    tile.innerHTML = coverHTML(board.cover) + '<div class="board-name">' + name + '</div>';
    tile.addEventListener('click', function () {
      openBoard(name);
    });
    boardGrid.appendChild(tile);
  });
}

function openBoard(name) {
  const board = boards[name];
  boardDetailTitle.textContent = name;
  boardDetailGrid.innerHTML = '';
  board.pins.forEach(function (url) {
    const img = document.createElement('img');
    img.src = url;
    boardDetailGrid.appendChild(img);
  });
  boardsView.style.display = 'none';
  boardDetailView.style.display = 'block';
}

backToBoards.addEventListener('click', function () {
  boardDetailView.style.display = 'none';
  boardsView.style.display = 'block';
});

renderBoardTiles();
