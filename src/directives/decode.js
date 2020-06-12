const rules = [
  [/^(?:######)\s*(.+?)[ \t]*$/gm, '<h6>$1</h6>'],
  [/^(?:#####)\s*(.+?)[ \t]*$/gm, '<h5>$1</h5>'],
  [/^(?:####)\s*(.+?)[ \t]*$/gm, '<h4>$1</h4>'],
  [/^(?:###)\s*(.+?)[ \t]*$/gm, '<h3>$1</h3>'],
  [/^(?:##)\s*(.+?)[ \t]*$/gm, '<h2>$1</h2>'],
  [/^(?:#)\s*(.+?)[ \t]*$/gm, '<h1>$1</h1>'],
  [/^(?:-)\s*(.+?)[ \t]*$/gm, '<ul><li>$1</li></ul>'],
  [/^(?:>)\s*(.+?)[ \t]*$/gm, ' <q>$1<q>']
]
export default {
  bind(el) {
    let content = el.textContent
    rules.forEach(([rule, template]) => {

      content = content.replace(rule, template);
      console.log(content)
    })
    el.innerHTML = content
  }
}
