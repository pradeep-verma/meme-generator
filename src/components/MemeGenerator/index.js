import {Component} from 'react'
import {
  AppContainer,
  ContentContainer,
  Heading,
  MemeContent,
  MemePage,
  MemeText,
  MemeForm,
  InputContainer,
  Input,
  Label,
  Button,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    url: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    showMeme: false,
  }

  generateMeme = event => {
    event.preventDefault()
    const {url, topText, bottomText} = this.state
    if (url !== '' && topText !== '' && bottomText !== '') {
      this.setState({showMeme: true})
    }
  }

  onChangeUrl = event => {
    this.setState({url: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {url, topText, bottomText, fontSize, showMeme} = this.state

    return (
      <AppContainer>
        <ContentContainer>
          <Heading>Meme Generator</Heading>
          <MemeContent>
            {showMeme ? (
              <MemePage data-testid="meme" url={url}>
                <MemeText fontSize={fontSize}>{topText}</MemeText>
                <MemeText fontSize={fontSize}>{bottomText}</MemeText>
              </MemePage>
            ) : null}
            <MemeForm onSubmit={this.generateMeme}>
              <InputContainer>
                <Label htmlFor="url">Image URL</Label>
                <Input
                  type="text"
                  id="url"
                  value={url}
                  onChange={this.onChangeUrl}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="url">Top Text</Label>
                <Input
                  type="text"
                  id="url"
                  value={topText}
                  onChange={this.onChangeTopText}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="url">Bottom Text</Label>
                <Input
                  type="text"
                  id="url"
                  value={bottomText}
                  onChange={this.onChangeBottomText}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="fontSize">Font Size</Label>
                <Input
                  as="select"
                  id="fontSize"
                  isSelect
                  value={fontSize}
                  onChange={this.onChangeFontSize}
                >
                  {fontSizesOptionsList.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </Input>
              </InputContainer>
              <Button type="submit">Generate</Button>
            </MemeForm>
          </MemeContent>
        </ContentContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
