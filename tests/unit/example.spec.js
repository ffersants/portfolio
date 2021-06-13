import { shallowMount } from '@vue/test-utils'
import Header from '../../src/components/Header'

describe('Header.vue', () => {
  it('Check if header content is changing based on the selected language', () => {
    const languageChoosed = 'en'
    const wrapper = shallowMount(Header, { 
      propsData: { 
        languageSelected: languageChoosed
      }
    })
    if(languageChoosed === 'pt'){
      expect(wrapper.text()).toBe("InfoProjetosContatoPTEN")
    } else {
      expect(wrapper.text()).toBe("InfoProjectsContactPTEN")
    }
    
  })
})
