import { shallowMount } from '@vue/test-utils'
import Header from '../../src/components/Header'

describe('Header.vue', () => {
  const wrapper = shallowMount(Header)
  let language;

  it("Expects PT as language selected", async () => {
    const selectedLanguage = wrapper.find('.language-selected')

    language = selectedLanguage.text();
    expect(language).toBe('PT')
  })

  it('Check if header content is changing based on the selected language', async () => {
    await wrapper.setProps({languageSelected: language})
    if(language === 'PT'){
      expect(wrapper.text()).toBe("InfoProjetosContatoPTEN")
    } else {
      expect(wrapper.text()).toBe("InfoProjectsContactPTEN")
    }
    
  })

  

})
