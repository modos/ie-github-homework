var translate = require('translation-google');
const text = `I've gotta keep the calm before the storm
I don't want less, I don't want more
Must bar the windows and the doors
To keep me safe, to keep me warm
Yeah, my life is what I'm fighting for

Can't bar sea, can't reach the shore

And my voice becomes the driving force

I won't let this put me overboard



God, keep my head above water

Don't let me drown

It gets harder, I'll meet you there at the altar

As I fall down to my knees

Don't let me drown, drown, drown

(Don't let me, don't let me, don't let me drown)



So pull me up from down below

'Cause I'm underneath the undertone

Can drive me off and hold me close

I need you now, I need you most



God, keep my head above water

Don't let me drown

It gets harder, I'll meet you there at the altar

As I fall down to my knees

Don't let me drown, drown, drown

(don't let me, don't let me, don't let me drown)

Don't let me drown, drown, drown (don't let me, don't let me don't let me drown)

I keep my head above water, above water



And I can't see in the stormy weather

I can't seem to keep it all together

And I, I can't swim the ocean like this forever

And I can't breathe



God, keep my head above water

I lose my breath

At the bottom

Come rescue me, I'll be waiting

I'm too young to fall asleep



God, keep my head above water

Don't let me drown

It gets harder, I'll meet you there at the altar

As I fall down to my knees



Don't let me drown

(don't let me, don't let me, don't let me drown)



Don't let me drown

I keep my head above water



Above water`
translate(text, {from:'en', to: 'fa'}).then(res => {
    console.log(res.text);
    //=> 这是Google翻译
    console.log(res.from.language.iso);
    //=> en
}).catch(err => {
    console.error(err);
});