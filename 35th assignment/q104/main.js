function RGBgenerator() {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
}
console.log(RGBgenerator());
