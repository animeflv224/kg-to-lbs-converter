   document.getElementById('convertButton').addEventListener('click', function() {
       const kg = parseFloat(document.getElementById('kgInput').value);
       if (!isNaN(kg)) {
           const lbs = kg * 2.20462;
           document.getElementById('result').innerText = `${kg} kg is equal to ${lbs.toFixed(2)} lbs`;
       } else {
           document.getElementById('result').innerText = 'Please enter a valid number';
       }
   });

   document.getElementById('clearButton').addEventListener('click', function() {
       document.getElementById('kgInput').value = '';
       document.getElementById('result').innerText = '';
   });
   