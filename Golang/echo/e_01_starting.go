package main

import (
	"fmt"
	"github.com/labstack/echo"
	"io"
	"net/http"
	"os"
)

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.POST("/saveUser", saveUser)
	e.POST("/save", save)
	e.POST("/usersjson", userJson)
	e.GET("/users/:id", getUser)
	e.GET("/show", show)
	//e.PUT("/users/:id", updateUser)
	//e.DELETE("/users/:id", deleteUser)
	e.Logger.Fatal(e.Start(":1323"))
}

//Path Parameters e.GET("/users/:id", getUser)
//ex : http://localhost:1323/users/oki
func getUser(c echo.Context) error {
	// User ID from path `users/:id`
	id := c.Param("id")
	return c.String(http.StatusOK, "hai "+id)
}

//Query Parameters e.GET("/show", show)
//ex: /show?team=x-men&member=wolverine
func show(c echo.Context) error {
	// Get team and member from the query string
	team := c.QueryParam("team")
	member := c.QueryParam("member")
	return c.String(http.StatusOK, "team:"+team+", member:"+member)
}

//Form application/x-www-form-urlencoded e.POST("/saveUser", saveUser)
// run the following command : curl -F "name=Joe Smith" -F "email=joe@labstack.com" http://localhost:1323/save
func saveUser(c echo.Context) error {
	// Get name and email
	name := c.FormValue("name")
	email := c.FormValue("email")
	return c.String(http.StatusOK, "name:"+name+", email:"+email)
}

//Form multipart/form-data
//Run the following command :curl -F "name=Joe Smith" -F "avatar=@/path/to/your/avatar.png" http://localhost:1323/save
func save(c echo.Context) error {
	// Get name
	name := c.FormValue("name")
	// Get avatar
	avatar, err := c.FormFile("avatar")
	if err != nil {
		return err
	}

	// Source
	src, err := avatar.Open()
	if err != nil {
		return err
	}
	defer src.Close()

	// Destination
	dst, err := os.Create(avatar.Filename)
	if err != nil {
		return err
	}
	defer dst.Close()

	// Copy
	if _, err = io.Copy(dst, src); err != nil {
		return err
	}

	return c.HTML(http.StatusOK, "<b>Thank you! "+name+"</b>")
}

//Handling Request
//Bind json, xml, form or query payload into Go struct based on Content-Type request header. Render response as json or xml with status code.

type User struct {
	Name  string `json:"name" xml:"name" form:"name" query:"name"`
	Email string `json:"email" xml:"email" form:"email" query:"name"`
}

func userJson(c echo.Context) error {
	fmt.Printf("masuk sini")
	u := new(User)
	if err := c.Bind(u); err != nil {
		fmt.Printf("errror: %v", err)
		return err
	}
	u.Name = u.Name + " namasay"
	u.Email = u.Email + " emailsay"

	return c.JSON(http.StatusCreated, u)
	// or
	// return c.XML(http.StatusCreated, u)
}
