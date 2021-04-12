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
                    text:'Info',
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
    props: {
        languageSelected: {
            type: String,
            required: true
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
        },
        organizeUnderlinePosition(){
            const hash = document.location.hash;
            console.log('chamado')
            switch(hash){
                case "#info" :
                    this.navLinks[0].active = true;
                    document.getElementById('info').click();
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
                    console.log('padrao')
                    document.getElementById('info').click();
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
        this.organizeUnderlinePosition()
        window.addEventListener('resize', this.organizeUnderlinePosition)
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .header{
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        z-index: 10;
       
        font-size: .8rem;
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

    .languague-option{
        background-color:#3C0AA1;
        border: none;
        padding: .6em 1em;
        font-size: 1em;
        transition: all .3s;
        display: inline;
        color: white;
    }

    .language-selected{
        background-color:#5913FF;
    }

    @media (max-width: 576px){
        .header{
            font-size: .9rem;
        }
    }

     
    @media (min-width: 576px) and (max-width: 767.98px) {
        .header{
            font-size: 1rem;
        }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        .header{
            font-size: 1.2rem;
        }
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        .header{
            font-size: 1.2rem;
        }
    }

    @media (min-width: 1200px) {
        .header{
            font-size:1.2rem
        }
    }
    
</style>