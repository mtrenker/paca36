import * as React from 'react';
import { client } from './../contenful'

interface IProps {
}

const CarScreen: React.FunctionComponent<IProps> = ({
}) => {
  const [pages, setPages] = React.useState([]);
  React.useEffect(() => {
    client.getEntries().then(entries => {
      console.log(entries);

      const pages = entries.toPlainObject().items.filter(item => item.sys.contentType.sys.id === 'page')
      setPages(pages as any);
    })
  }, []);
  console.log(pages);

  return (
    <div>
      <h1>Page Example</h1>
      {pages.map((page: any) => {
        for (const field in page.fields) {
          console.log(field);

          switch (field) {
            case 'title':
              return <p>{page.fields.title}</p>

            case 'content':
              console.log("CONTENT")
              return page.fields.content.map((content: any) => {
                switch (content.sys.contentType.sys.id) {
                  case 'pageRichtext':
                    console.log(content.fields.content)
                    return <div dangerouslySetInnerHTML={{__html: content.fields.content}}></div>

                  default:
                    break;
                }
              })

            default:
              break;
          }
        }
      })}
    </div>
  )
};

export {
  CarScreen
};
