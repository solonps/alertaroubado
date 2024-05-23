document.getElementById('reportBtn').addEventListener('click', function() {
    document.getElementById('reportForm').style.display = 'block';
});

document.getElementById('alertBtn').addEventListener('click', function() {
    const vehicle = document.getElementById('vehicle').value;
    const plate = document.getElementById('plate').value;
    const location = document.getElementById('location').value;

    if (vehicle && plate && location) {
        const canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = 600;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#FF0000';
        ctx.font = '50px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('CAMINHÃO ROUBADO', canvas.width / 2, 100);

        ctx.fillStyle = '#000000';
        ctx.font = '30px Arial';
        ctx.fillText(`Veículo: ${vehicle}`, canvas.width / 2, 200);
        ctx.fillText(`Placa: ${plate}`, canvas.width / 2, 250);
        ctx.fillText(`Local de Roubo: ${location}`, canvas.width / 2, 300);
        ctx.fillText('Se tiver informações, ligue para a central:', canvas.width / 2, 400);
        ctx.fillText('0800 702 700', canvas.width / 2, 450);

        const link = document.createElement('a');
        link.download = 'alerta_caminhao_roubado.jpg';
        link.href = canvas.toDataURL('image/jpeg');
        link.click();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});