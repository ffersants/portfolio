<template>
    <header class="header">
        <nav>
            <ul>
                <li v-for="link of navLinks" :key="link.id" :id="link.id"  @click="switchActiveLink">
                    <a :class="link.active && 'active-link'"  :href="link.href">
                        {{link.text}}
                    </a>
                </li> 
                <span :style="underlineStyle">
                </span>            
            </ul>
        </nav>

        <div>
            <div id="language-switcher">
                <button @click="changeLanguage" id="pt" class="languague-option language-selected">PT</button>
                <button @click="changeLanguage" id="en" class="languague-option">EN</button>
            </div>
        </div>
    </header>
</template>

<script>

export default{
    name: 'Header',
    data(){
        return{
            navLinks: [
                {
                    text: 'Info',
                    href: '#info',
                    id: 'info',
                    active: false, 
                },
                {
                    text: 'Projetos',
                    href: '#projects',
                    id: 'projects',
                    active: false,         
                },
                {
                    text: 'Contato',
                    id: 'contact',
                    href: '#contact',
                    active: false,
                }
            ],
            underlineWidth: null,
            underlineLeft: null,
            underlineRight: null,
            language: 'pt' 
        }
    },
    methods: {
        switchActiveLink({target}){
            //underline position
            

            const {width, left, right} = target.getBoundingClientRect()
            
            this.underlineWidth = width + 'px';
            this.underlineLeft = left + 'px';
            this.underlineRight = right + 'px';
            //list item 
            this.navLinks.map(link => {
                    if(link.text === target.innerText){
                        link.active = true
                    } else{
                        link.active = false
                    }
                }
            )
        },
        changeLanguage(){
            if(this.language === 'pt') {
               document.getElementById('pt').classList.remove('language-selected')
                this.language = 'en'
                document.getElementById('en').classList.add('language-selected')
            } else{
                document.getElementById('pt').classList.add('language-selected')
                this.language = 'pt' 
                document.getElementById('en').classList.remove('language-selected')
            }
        }
    },
    computed: {
        underlineStyle(){
            return{
                border: '2px solid var(--action-color)',
                display: 'flex',
                position: 'fixed',
                width: this.underlineWidth || '40.921875px',
                left: this.underlineLeft || '48px',
                right: this.underlineRight || '88.921875px',
                transition: 'all .5s',
                borderRadius: '1rem'
            }   
        }
    },
    mounted(){
       const hash = document.location.hash;

        switch(hash){
            case "#info" :
                this.navLinks[0].active = true;
                
            break;
            case "#projects" :
                this.navLinks[1].active = true;
                //envia o click para chamar a função e posicionar o underline
                document.getElementById('projects').click();
            break;
            case "#contact" :
                this.navLinks[2].active = true;
                document.getElementById('contact').click();
            break;
            default :
                this.navLinks[0].active = true;
        }
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        width: 100%;
        z-index: 10;
    }

    .header li{
        margin: 0 1em;
    }

    .header a{
        font-size: 1.2em;
        font-weight: 400;
        letter-spacing: .1em;
        transition: color .3s
    }

    .header a:hover{
        color: var( --action-color);
    }
    .active-one{
        color: var(--action-color);
    }

    .active-link{
        color: var(--action-color);
    }

    #language-switcher{
        display: flex;
    }    

    .languague-option{
        background-color:#3C0AA1;
        border: none;
        padding: .6em 1em;
        font-size: 1.2em;
        transition: all .3s;
    }

    .language-selected{
        background-color:#5913FF;
    }
</style>