// Carlos Andres Barrientos Pardo
// EP01 - Trabajo de Vocales y Consonantes
// 561211201
// Universidad de Cundinamarca Ext Chia - Noche


**************************************************************************************************************************************
Trabajo de vocales y consonantes 
**************************************************************************************************************************************
var palabra = "Abducciones";
	var conta = 0; 
	var consonantes = 0;
	palabra = palabra.toLowerCase();
	for (var i = 0; i < palabra.length; i++)
		{
			if(palabra.charAt(i)=='a' || palabra.charAt(i)=='e' || palabra.charAt(i)=='i' || palabra.charAt(i)=='o' || palabra.charAt(i)=='u')
			{
				conta++;
				}else{
					consonantes++;
			}

		}

console.log(" La palabra "+palabra+" Tiene "+conta+" vocales y tiene "+consonantes+" consonantes");


