# Pleroma: A lightweight social networking server
# Copyright © 2017-2019 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.FallbackTest do
  use Pleroma.Web.ConnCase
  import Pleroma.Factory

  test "GET /registration/:token", %{conn: conn} do
    assert conn
           |> get("/registration/foo")
           |> html_response(200) =~ "<!--server-generated-meta-->"
  end

  test "GET /:maybe_nickname_or_id", %{conn: conn} do
    user = insert(:user)

    assert conn
           |> get("/foo")
           |> html_response(200) =~ "<!--server-generated-meta-->"

    refute conn
           |> get("/" <> user.nickname)
           |> html_response(200) =~ "<!--server-generated-meta-->"
  end

  test "GET /*path", %{conn: conn} do
    assert conn
           |> get("/foo")
           |> html_response(200) =~ "<!--server-generated-meta-->"

    assert conn
           |> get("/foo/bar")
           |> html_response(200) =~ "<!--server-generated-meta-->"
  end

  test "OPTIONS /*path", %{conn: conn} do
    assert conn
           |> options("/foo")
           |> response(204) == ""

    assert conn
           |> options("/foo/bar")
           |> response(204) == ""
  end
end
