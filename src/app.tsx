import { ui } from 'tabris'
import { NavigationView, Page, TextView, Button } from './component'

NavigationView(
    {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    },
    [
        Page(
            {
                title: 'Ya mama'
            },
            [
                TextView({
                    left: 16,
                    right: 16,
                    top: 16,
                    text: 'NavigationView is great'
                }),
                Button({
                    text: 'Click Me'
                })
            ]
        )
    ]
).appendTo(ui.contentView)

// ui.contentView.append(
//     <navigationView left={0} right={0} top={0} bottom={0}>
//         <page title="Ya Mama">
//             <textView left={16} right={16} top={16} text="NavigationView is great" />
//         </page>
//     </navigationView>
// )

// let video = Video({
//     left: 0,
//     top: 0,
//     right: 0,
//     bottom: '#button 16',
//     url: 'http://peach.themazzone.com/durian/movies/sintel-1280-stereo.mp4',
//     controlsVisible: true,
//     autoPlay: false
// })
//     .on('stateChanged', event => (button.text = event.value !== 'pause' ? '❚❚' : '▶'))
//     .appendTo(ui.contentView)

// let button = Button({
//     id: 'button',
//     centerX: 0,
//     bottom: 16,
//     text: '❚❚'
// })
//     .on('select', () => (video.state === 'play' ? video.pause() : video.play()))
//     .appendTo(ui.contentView)
