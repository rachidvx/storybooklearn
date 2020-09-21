import {storiesOf} from '@storybook/angular';

import {SubmitBtnComponent} from '../app/submit-btn/submit-btn.component';

storiesOf('Submit Button', module)
.add('Submit button', () => ({
    component: SubmitBtnComponent,
    props: {
        title: 'Yess It Works!',
        disable: true
    }
}));