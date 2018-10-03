---
layout: post
title:  "Convert Jupyter notebooks to Jekyll pages"
categories: [code, notes]
---

Create a Jekyll website:

```
jekyll new my-website
cd my-website
```

It would be nice if we could toggle the code blocks. Create a Jekyll layout to that adds a toggle button and some JavaScript, e.g. `_layouts/jupyter.html`:

{% raw %}
```html
---
layout: post
---

{{ content }}

<style>
.code-toggle {
    position: fixed;
    right: 10px;
    bottom: 10px;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    background-color: lightgreen;
}
</style>

<button class="code-toggle" onclick="toggle()">Code</button>

<script>

var styleElement = document.createElement('style');
var show = true;
document.head.appendChild(styleElement);

function toggle() {
  var styleSheet = styleElement.sheet;
  if (show) {
    styleSheet.insertRule(".language-python { display: none }", 0);
  } else {
    styleSheet.deleteRule(0);
  }
  show = !show;
}
</script>
```
{% endraw %}

Set up a Python environment for using Jupyter Notebook and for converting notebooks to Jekyll markdown pages:

```
virtualenv env
source env/bin/activate
pip install jupyter
```

Create a Python file e.g. `page-from-notebook.py` to create Jekyll pages from notebooks:

```python
import sys
import re
import nbformat
from nbconvert import MarkdownExporter
from nbconvert.writers import FilesWriter
from traitlets.config import Config

# Get command line argument e.g. notebooks/my-project/My-Notebook.ipynb
nb_path = sys.argv[1]

# Notebook name e.g. 'My-Notebook'
nb_name = re.search('[^\/]*(?=\.ipynb)', nb_path).group(0)

# Jekyll page title e.g. 'My Notebook'
title = nb_name.replace('-', ' ')

# Notebook directory e.g. 'notebooks/my-project/'
nb_directory = re.search('.*(?={})'.format(nb_name), nb_path).group(0)

# Read notebook
nb_node = nbformat.read(nb_path, nbformat.NO_CONVERT)

# Get output and resources
exporter = MarkdownExporter()
(output, resources) = exporter.from_notebook_node(nb_node)

# Front matter for Jekyll page
front_matter = """---
layout: jupyter
title:  "{}"
---
""".format(title)

# Insert front matter
output = front_matter + output

# Write markdown file and resources
config = Config()
config.FilesWriter.build_directory = nb_directory + "view/"
writer = FilesWriter(config=config)
writer.write(output, resources, notebook_name=nb_name)
```

To convert, run:

```
python page-from-notebook.py notebooks/my-project/My-Notebook.ipynb
```

This will write a markdown file with front matter and `.png` resources to `notebooks/my-project/view`.

Run `jekyll serve` and there should be a page for the notebook, including a floating button bottom right to toggle code blocks.
