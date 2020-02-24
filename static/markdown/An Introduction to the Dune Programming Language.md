# An Introduction to the Dune Programming Language

```
alias /[xy]/ = INT
struct SQ = (x,y)

impl BOARD:
	proc Print:	
		for ,i := self:
			for ,j := self[i]:
				Print self[i][j]
			Print '\n'
				
	fn Str() -> STR:
		for row, := self:
			for piece?, := row:
				piece, = piece?
				char = if piece: piece.Char() else: '.'
				out.Push char
			out.Push '\n'
			
	fn StrAlt() -> STR:
		.FlattenEach(row =>
			row.Each(piece? =>
				| if piece: piece.Char() else: '.'
			).Push('\n')
		)

```

```
#!/bin/sh

cat src/* | dune
```