import React from 'react';

const Contact = () => {
  return (
    <>
      <div className='contact' id='contact'>
        <h2 className='contact__title'>CONTACT</h2>

        <div className='contact__container'>
          <form
            name='contact'
            method='post'
            className='form form--dark'
            action='/contact'>
            <input type='hidden' name='form-name' value='contact' />
            <div className='form__group'>
              <label htmlFor='email' className='form__label form__label--dark'>
                E MAIL
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='E MAIL'
                className='form__input'
              />
            </div>
            <div className='form__group'>
              <label
                htmlFor='message'
                className='form__label form__label--dark'>
                MESSAGE
              </label>
              <textarea
                id='message'
                name='message'
                placeholder='MESSAGE'
                className='form__txtarea'></textarea>
            </div>
            <div className='form__group'>
              <button type='submit' value='SUBMIT' className='form__btn'>
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className='footer'>
          <h3>
            © 2021 &nbsp;
            <a className='logo' href='https://vdev.netlify.app/'>
              V Dev
            </a>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Contact;
