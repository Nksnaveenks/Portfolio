             const scriptURL = 'https://script.google.com/macros/s/AKfycbyBZSQDrg3AenA60Kbr8yDjZWlVnCWYdn4IHE3JGdZtHxEmswZFtyFOg2q1fdTDRv4V/exec'
                            const form = document.forms['submit-to-google-sheet']
                            const msg = document.getElementById("msg")
                          
                            form.addEventListener('submit', e => {
                              e.preventDefault()
                              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                                .then(response => 
                                {
                                    msg.innerHTML="Message send successfully"
                                    setTimeout(function(){
                                        msg.innerHTML=""
                                    },1000)
                                    form.reset()
                                })
                                .catch(error => console.error('Error!', error.message))
                            })
                         

                       
                         