# Video Player (mini app)
## Brief:
You just learned your first programming pattern. Let’s put it to use!

For this project, you’ll make three React components work together to create a responsive video player.

## Objectives:
- Set up a new React app using Create React App or Vite.  
- Create an `App` component to manage the video source state.  
- Create a `Video` component to display the video player, receiving the video source as a prop.  
- Create a `Menu` component with radio buttons or a dropdown to select different videos.  
- Pass the current video source from `App` to `Video` as a prop.  
- Pass a handler from `App` to `Menu` to update the video source when a new video is selected.  
- Update the video player when a new source is chosen.  
- Style the app for a clean, user-friendly interface.

### Additional points to consider:
- Prevent selecting the same video from reloading it.
- Make sure the video player is accessible (labels for controls, keyboard navigation).
- Handle cases where a video fails to load (show an error message).
- Make the UI responsive for different screen sizes.
- Use unique keys if rendering a list of video options.
- Add PropTypes or TypeScript for type safety if needed.
- Test for unexpected user actions, like rapid switching.