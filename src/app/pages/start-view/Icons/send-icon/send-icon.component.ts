import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-send-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
    >
      <path
        d="M21.8107 1.66995L18.5099 17.2364C18.2609 18.335 17.6115 18.6084 16.6887 18.0908L11.6594 14.3848L9.2326 16.7188C8.96405 16.9873 8.73944 17.2119 8.22186 17.2119L8.58319 12.0899L17.9045 3.66702C18.3097 3.30569 17.8166 3.1055 17.2746 3.46683L5.75116 10.7227L0.790218 9.16995C-0.288883 8.83304 -0.308415 8.09085 1.01483 7.57327L20.4191 0.0976854C21.3176 -0.239229 22.1037 0.297881 21.8107 1.66995Z"
        fill="white"
      />
    </svg>
  `,
  styles: ``,
})
export class SendIconComponent {
  @Input() class = '';
}
