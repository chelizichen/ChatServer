package routes

import (
	h "Sgrid/src/http"
	"fmt"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func ServerRoutes(ctx *h.SgridServerCtx) {
	router := ctx.Engine.Group(strings.ToLower(ctx.Name))
	router.GET("/ws", func(c *gin.Context) {
		fmt.Println("conn", c.RemoteIP())
		upgrader.CheckOrigin = func(r *http.Request) bool { return true }
		ws, err := upgrader.Upgrade(c.Writer, c.Request, nil)
		if err != nil {
			panic(err)
		}
		defer ws.Close()

		clients[ws] = true

		for {
			var msg Message
			err := ws.ReadJSON(&msg)
			fmt.Println("msg", msg)
			if err != nil {
				delete(clients, ws)
				break
			}
			broadcast <- msg
		}
	})
	go handleMessages()
	ctx.Engine.Use(router.Handlers...)
}
