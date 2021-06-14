<template data-aos="fade-down">
    <header class="header">
        <nav>
            <ul>
                <li v-for="link of navLinks" :key="link.id"   >
                    <a @click="switchActiveLink" class="nav-link" :id="link.id" :href="link.href">
                        {{link.text}}
                    </a>
                </li> 
                <span :style="underlineStyle">
                </span>            
            </ul>
        </nav>

       
            <div id="language-switcher">
                <button @click="changeLanguage" id="pt" class="languague-option language-selected">PT</button>
                <button @click="changeLanguage" id="en" class="languague-option">EN</button>
            </div>
        
    </header>
</template>

<script>


export default{
    name: 'Header',
    data(){
        return{
            underlineWidth: null,
            underlineLeft: null,
            underlineRight: null,    
            languageSelected: window.localStorage.getItem('languageSelected')    
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
           let navLinks = document.querySelectorAll(".nav-link")

            for(let link of navLinks){
                if(link.innerText === target.innerText){
                    link.classList.add('active-link')
                } else{
                    link.classList.remove('active-link')
                }
            }
        },
        changeLanguage(){
            const pt = document.getElementById('pt')
            const en = document.getElementById('en')

            console.log(this.languageSelected)
            if(this.languageSelected === 'PT') {
                en.classList.add('language-selected')
                window.localStorage.setItem("languageSelected", "EN")
                this.languageSelected = "EN"
                
                pt.classList.remove('language-selected')
                
            } else{
                pt.classList.add('language-selected')
                window.localStorage.setItem("languageSelected", "PT")
                this.languageSelected = "PT"
                en.classList.remove('language-selected')
            }

            this.emitter.emit('Language changed')
            
            setTimeout(() => {
                this.organizeUnderlinePosition()
            }, 300)
            
        },
        organizeUnderlinePosition(){
            const hash = document.location.hash
            console.log('organizeUnderlinePosition')
            switch(hash){
                case "#info" :
                    document.getElementById('info').click();
                break;
                case "#projects" :
                    //envia o click para chamar a função e posicionar o underline
                    document.getElementById('projects').click();
                break;
                case "#contact" :
                    document.getElementById('contact').click();
                break;
                // default :
                //     document.getElementById('info').click();
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
        },
        navLinks(){
            return [
                {
                    text: 'Info',
                    href: '#info',
                    id: 'info',
                },
                {
                    text: this.languageSelected === 'PT' ? 'Projetos' : 'Projects',
                    href: '#projects',
                    id: 'projects',
                },
                {
                    text: this.languageSelected === 'PT' ? 'Contato' : 'Contact',
                    id: 'contact',
                    href: '#contact',
                }
            ]       
        }
    },
    beforeCreate(){
        window.localStorage.setItem("languageSelected", "PT")
    },
    mounted(){
        this.organizeUnderlinePosition()
        window.addEventListener('resize', this.organizeUnderlinePosition)
        window.addEventListener('hashchange', this.organizeUnderlinePosition)
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
        background-color: var(--bg-global);
        font-size: .8rem;
        margin-bottom: 2em;
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
        opacity: .4;
    }

    .language-selected{
        background-color:#5913FF;
        border: none;
        opacity: 1;
    }

    @media (max-width:388px){
        .languague-option{
            padding: 10%;
        }

        #language-switcher{
            width: 100%;
        }

        nav{
            border: 1px solid green;
        }
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