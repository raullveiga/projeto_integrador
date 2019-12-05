var descs = [
    'Desenvolvedora Web Full Stack formada pela Generation. Geek, Potterhead, autodidata, apaixonada por organização e infraestrutura está vivendo o grande sonho de atuar na área de desenvolvimento. Nesse projeto atuou no Front-End.',
    'Desenvolvedora Web Full Stack formada pela Generation. O amor e dedicação por programação aconteceu por influência do curso de Engenharia Elétrica e só aumenta a cada dia. Nesse projeto atuou tanto no Front-End quanto no Back-End. ',
    'Desenvolvedor Web Full Stack formado pela Generation.Cientista da Computação em formação e autodidata desde a infância, tem grande afinidade com a área da tecnologia e desenvolvimento.Nesse projeto atuou como Back - End.',
    'Desenvolvedora Web Full Stack formada pela Generation.Bacharel em Marketing, entrou na área de desenvolvimento devido a paixão que  adquiriu na infância pela tecnologia.Fã de cultura pop e games.Nesse projeto atuou no Front - End.',
    'Desenvolvedora Web Full Stack formada pela Generation.Começou a programar devido ao amor pela tecnologia, games e mundo geek.Nesse projeto atuou como Back - End.'];
function descIn(quem, pos) {
    document.getElementById(quem).innerHTML = descs[pos]
}
function descOut(quem) {
    document.getElementById(quem).innerHTML = "Desenvolvedora"
}