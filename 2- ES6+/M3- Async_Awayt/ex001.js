const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo(seconds){
    
 for(var i=1 ; i<seconds; i++){
    await delay()
    console.log(`${i}s`);
    }}


umPorSegundo(10);