/*
Because the X in Ajax doesn’t stand for anything (especially not XML ), Ajax can take more than
one data format. Most commonly, you will be dealing with three specific data formats: XML ,
HTML and JSON . Each has positive aspects and negative aspects; knowing the difference will
help you choose the right tool for the job.

XML
XML stands for eXtensible Markup Language. It is a very flexible data format and immensely
popular for use in application data. It is very similar to HTML in its anatomy, containing a
DOCTYPE , elements, tags, and attributes. It even adheres to the same document object model
as HTML .

Positives
Being an extensible format is a huge plus for XML. You’re not locked into any predefined data
structure because you can define it as you go, as long as it is kept consistent throughout the
file. Adhering to the DOM standard is another positive aspect of XML. After pulling the data
in through an Ajax call, it is parsed the same as a normal HTML document with methods like
getElementsByTagName() , getAttribute() , parentNode , firstChild , and lastChild . Not
having to relearn any new methods to parse XML makes it a very attractive option.

Negatives
Because XML is so similar to HTML and uses the same DOM standards, it can take a lot of code
to parse through and build the output.
One pretty big drawback of using XML is that it cannot be used cross-domain with Ajax. All
Ajax calls to an XML data file must come from the same domain or the request will fail. For
this reason, you don’t see a lot of public data sources in XML format. If they were, you would
need to create a server-side proxy to pull in the XML and have the Ajax call reference the data
by way of the proxy.

HTML
Working with Ajax and HTML snippets couldn’t be more straightforward. You have an HTML
file and you consume its contents in full with an Ajax call. 
Positives
Speed is an important reason to use this method. Unlike the other data formats, no client-side
parsing is needed because you’re grabbing an entire snippet of HTML and outputting it into the
DOM. Not having to write a lot of extra JavaScript to parse the incoming HTML will not only
save you time as a developer, but it will save processing time for the user.

Negatives
Using HTML as a data source works very well if you are asynchronously updating a single block
of content in a document, but it doesn’t get you the fine-grained control that XML or JSON
will give you.
Unless you’re literally updating an HTML document with a static block of content, which
would be a little odd and, frankly, pretty rare, you’re going to have to do some server-side
processing to get the data you want. This is generally the fastest way to do it, but if you like
working in server-side code, that might be something to consider as a downside of using HTML
as a data format.

JSON
Ahhhh, the wonderful world of JSON; we have been using JSON as a data format for most of
the book, so you should be pretty familiar with it at this point. It’s a very human-readable and
machine-readable format, which has no structural limitations. Each item in a JSON data format
can be different from all the others. In our data file, we are using a consistent structure of name
and email, but it doesn’t have to be like that because JSON doesn’t force any real consistency in
its format.

Positives
JSON is my personal favorite because it is native to JavaScript, very fast, flexible, and platform
agnostic—meaning almost any programming language plays nice with JSON.

Unlike XML, JSON can be consumed cross-domain very easily; it has no native domain limi-
tations because it is just a JavaScript data format. This makes it the ideal candidate for API
structures. Because it is such a flexible format, you will find that the majority of Web services
offered are in JSON format.

Negatives
Although the data format of JSON is very flexible, the syntax is not (but this goes with any data
format). Every comma, quotation mark, and colon needs to be in the right place for the data to
be parsed correctly.

Some security concerns also exist with using JSON from any third-party Web service, because
at its core, it’s just JavaScript, and it’s very easy to remotely inject malicious scripting through a
JSON object. This can be protected against, but in general you should consume JSON data only
from trusted sources.*/


