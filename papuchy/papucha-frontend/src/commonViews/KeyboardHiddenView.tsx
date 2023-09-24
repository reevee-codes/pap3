import { useState, useEffect, Children } from 'react';
import { Keyboard } from 'react-native';

export function KeyboardHiddenView ({children}) {

    const [hidden, toggleHidden] = useState(false);


    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
          toggleHidden(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
          toggleHidden(false);
        });
      
        return () => {
          showSubscription.remove();
          hideSubscription.remove();
        };
      }, []);
      
      
      if (hidden) {
        return;
      }
      return (
        <>
            {children}
        </>
      )
}