/*
 * Guangyao Li
 * 2018/02/28
 * lgy87@foxmail.com
 */
import findInBy from "utils/findInBy"

function patchClassName ({
  list,
  pred = r.equals(true),
  transformer = r.identity,
}, Component) {
  return function (props) {
    const classList = findInBy(pred, list, props)
    const className = cx(
      props.className,
      classList.map(transformer)
    )
    const newProps = r.omit(classList, props)

    return <Component {...newProps} {...{className}} />
  }
}

export default r.curry(patchClassName)
