function convert() {
    const binary = document.getElementById('b-input').value;
    if (binary === '') return alert('Enter binary number');
    if (binary.length > 8) return alert('U entered more than 8 numbers');
    binary.split('').map((num) => {
        if (num !== '0' && num !== '1') return alert('Enter binary naumber 1 or 0')
    });
    const decimal = parseInt(binary, 2);
    document.getElementById('d-input').value = decimal;
    return true;
}