# Implement the Product page design

[adobe XD designs]
(https://xd.adobe.com/view/e55ea447-4280-4a4b-40ef-1aec76f38e95-936f/)

## Fonts

Font used: Poppins  
Font weights required: Regular, medium, semi-bold

## Colours

- Teal: #23BBBE
- Blue: #308AE2
- Steel Grey: #282536
- Waterloo: #757594

Text uses the following opacity variations of white (#ffffff)

- 100% white
- 78% white
- 54% white

## Images/Screenshots

Doesn't matter which images are used as part of the carousel. The following images were used elsewhere:


[300 style kick to the chest](https://steamcdn-a.akamaihd.net/steam/apps/812140/ss_6dc9f95cfb6d264c3535b53ce08f36ee07066550.jpg?t=1540836192)

[Freaky Medusa Lady](https://steamcdn-a.akamaihd.net/steam/apps/812140/ss_458b7cc7392b6fd073bbd679868fd486013cb474.jpg?t=1540836192)


[Man in background](https://steamcdn-a.akamaihd.net/steam/apps/812140/ss_c334fed07712111399ab1951eee432ec9ed46d28.jpg?t=1540836192)

On the desktop design the first image was overlaid with "Steel Grey" at 55% opacity.  
The Man in background was set to 3% opacity.  
The Medusa lady was overlaid with #6F6D78 at 55% opacity.

Note that the opening and closing images were also partially covered by a gradient layer (from the colour overlaid on the images to full transparency). This was done to help give them impression of the image blending into the rest of the body. If this is challenging to perform with CSS alone, then make use of image editing software (such as gimp)to edit the images directly.

## Icons

The windows, xbox and play station icons were found on fontawesome.  
I can't recall where the add to basket icon came from, so probably best to just use one from fontawesome too.

## Navigation

There are two levels of navigation:

- The site wide navigation, (as we are only designing one page this nav menu only contains the logo currently)
- The product page navigation - which jumps to the relevant sections of the page itself.

The top navigation doesn't need to be fixed, or stick to the top of the page. But the product navigation should "Stick" to the top once the user scrolls beyond it's initial position. For an example of this, check out [JIRA page](https://www.atlassian.com/software/jira)

## Typography

Fonts have a tendency to display quite differently on adobe xd from actual browsers. For that reason I encourage you to adjust the typography sizes till it looks right. I'd suggest using a relative unit (em as opposed to px). You may even want to then adjust the root level size for smaller resoultions

- H1: semi-bold weight, size 2.4
- h2: semi-bold weight, size 2
- h3: Medium weight, size 1.33
- h4: Regular weight, size 1.11
- P: regular weight, size - 1

## Notes

- The field uses the waterlook background colour with an opacity in the 50% range.
- Fields and buttons use a consistent border radius
- Drop shadows are used in several places to help elevate the component - fields, buttons, purchase option box
- The main call to action button actually uses a gradient between the two brand colours (blue to teal)
- The mobile version is adjusted in the following ways
    - The title section is moved below the header image
    - The header image doesn't use an opacity layer
    - The background image in the body is hidden
    - The section that was two columns becomes stacked
