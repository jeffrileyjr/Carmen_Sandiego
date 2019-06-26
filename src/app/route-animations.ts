import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';


// export const fader =
//   trigger('routeAnimations', [
//     transition('* <=> *', [
//       // Set a default  style for enter and leave
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           left: 0,
//           width: '100%',
//           opacity: 0,
//           transform: 'scale(0) translateY(100%)',
//         }),
//       ]),
//       // Animate the new page in
//       query(':enter', [
//         animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
//       ])
//     ]),
// ]);

export const slider =
  trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left') ),
    transition('* => isRight', slideTo('right') ),
    transition('isRight => *', slideTo('left') ),
    transition('isLeft => *', slideTo('right') )
  ]);

function slideTo(direction) {
  // const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('800ms ease', style({ [direction]: '100%'}))
      ]),
      query(':enter', [
        animate('800ms ease', style({ [direction]: '0%'}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}

// export const transformer =
//   trigger('routeAnimations', [
//     transition('* => isLeft', transformTo({ x: -100, y: -100, rotate: -720 }) ),
//     transition('* => isRight', transformTo({ x: 100, y: -100, rotate: 90 }) ),
//     transition('isRight => *', transformTo({ x: -100, y: -100, rotate: 360 }) ),
//     transition('isLeft => *', transformTo({ x: 100, y: -100, rotate: -360 }) )
// ]);


// function transformTo({x = 100, y = 0, rotate = 0}) {
//   const optional = { optional: true };
//   return [
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%'
//       })
//     ], optional),
//     query(':enter', [
//       style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`})
//     ]),
//     group([
//       query(':leave', [
//         animate('700ms ease-out', style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`}))
//       ], optional),
//       query(':enter', [
//         animate('700ms ease-out', style({ transform: `translate(0, 0) rotate(0)`}))
//       ])
//     ]),
//   ];
// }
